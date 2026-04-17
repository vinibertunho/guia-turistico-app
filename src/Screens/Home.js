import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Platform,
} from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import dados from './data/dados.json';
import ItemCard from '../components/ItemCard';

const TABS = [
    { key: 'pontos', label: 'Pontos Turísticos', icon: '📍' },
    { key: 'restaurantes', label: 'Restaurantes', icon: '🍽️' },
];

const RESTAURANT_FILTERS = ['Destaques', 'Frutos do Mar', 'Churrascaria'];

const categoryMap = {
    'Frutos do Mar': 'Frutos do Mar',
    Churrascaria: 'Churrasco',
};

export default function Home() {
    const [activeTab, setActiveTab] = useState('pontos');
    const [activeFilter, setActiveFilter] = useState('Destaques');
    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    const handleItemClick = (item) => {
        navigation.navigate('Detalhes', { itemData: item });
    };

    const restaurantes =
        activeFilter === 'Destaques'
            ? dados.restaurantes
            : dados.restaurantes.filter((r) => r.categoria === categoryMap[activeFilter]);

    const pontos = dados.pontosTuristicos;

    const TopBarHeader = () => (
        <View style={styles.topbarHeader}>
            <View style={styles.topbarRow}>
                <View style={styles.logoContainer}>
                    <TouchableOpacity
                        onPress={openDrawer}
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                        <Text style={styles.iconText}>☰</Text>
                    </TouchableOpacity>
                    <Text style={styles.logoText}>Guia Rio Digital</Text>
                </View>
                <View style={styles.avatar}>
                    <Text style={styles.avatarIcon}>👤</Text>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <View style={styles.container}>
                {activeTab === 'pontos' && (
                    <View style={styles.tabContent}>
                        <View style={styles.headerContainer}>
                            <TopBarHeader />
                            <Text style={styles.title}>Pontos Turísticos</Text>
                            <Text style={styles.subtitle}>Rio de Janeiro, Brasil</Text>
                        </View>

                        <FlatList
                            data={pontos}
                            keyExtractor={(item) => item.id.toString()}
                            contentContainerStyle={styles.listContent}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <ItemCard
                                    item={item}
                                    onClick={() => handleItemClick(item)}
                                    variant="tourist"
                                />
                            )}
                        />
                    </View>
                )}

                {activeTab === 'restaurantes' && (
                    <View style={styles.tabContent}>
                        <View style={styles.headerContainer}>
                            <TopBarHeader />
                            <Text style={styles.categoryBadge}>Gastronomia Carioca</Text>
                            <Text style={[styles.title, { marginBottom: 12 }]}>Restaurantes</Text>

                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={styles.filterScroll}>
                                {RESTAURANT_FILTERS.map((f) => {
                                    const isActive = activeFilter === f;
                                    return (
                                        <TouchableOpacity
                                            key={f}
                                            onPress={() => setActiveFilter(f)}
                                            style={[
                                                styles.filterButton,
                                                isActive
                                                    ? styles.filterActive
                                                    : styles.filterInactive,
                                            ]}>
                                            <Text
                                                style={[
                                                    styles.filterText,
                                                    isActive
                                                        ? styles.filterTextActive
                                                        : styles.filterTextInactive,
                                                ]}>
                                                {f}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </ScrollView>
                        </View>

                        <FlatList
                            data={restaurantes}
                            keyExtractor={(item) => item.id.toString()}
                            contentContainerStyle={styles.listContent}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <ItemCard
                                    item={item}
                                    onClick={() => handleItemClick(item)}
                                    variant="restaurant"
                                />
                            )}
                        />
                    </View>
                )}

                <View style={styles.bottomBar}>
                    {TABS.map(({ key, label, icon }) => {
                        const isActive = activeTab === key;
                        return (
                            <TouchableOpacity
                                key={key}
                                onPress={() => setActiveTab(key)}
                                style={styles.tabButton}>
                                <Text style={[styles.tabIcon, { opacity: isActive ? 1 : 0.5 }]}>
                                    {icon}
                                </Text>
                                <Text
                                    style={[
                                        styles.tabText,
                                        { color: isActive ? styles.colors.primary : '#9CA3AF' },
                                    ]}>
                                    {label}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    colors: {
        primary: '#005580',
        background: '#F9FAFB',
        white: '#FFFFFF',
        textDark: '#111827',
        textMuted: '#9CA3AF',
        border: '#F3F4F6',
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
        maxWidth: 500,
        alignSelf: 'center',
        width: '100%',
    },
    tabContent: {
        flex: 1,
    },
    headerContainer: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingTop: 24,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
        zIndex: 20,
    },
    topbarHeader: {
        marginBottom: 16,
    },
    topbarRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    iconText: {
        fontSize: 24,
        color: '#374151',
    },
    logoText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#111827',
        marginLeft: 8,
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#005580',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarIcon: {
        fontSize: 16,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#111827',
    },
    subtitle: {
        color: '#9CA3AF',
        fontSize: 12,
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        marginTop: 2,
    },
    categoryBadge: {
        color: '#005580',
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        marginBottom: 4,
    },
    filterScroll: {
        gap: 8,
        paddingRight: 16,
    },
    filterButton: {
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 8,
    },
    filterActive: {
        backgroundColor: '#005580',
    },
    filterInactive: {
        backgroundColor: '#F3F4F6',
    },
    filterText: {
        fontSize: 12,
        fontWeight: '600',
    },
    filterTextActive: {
        color: '#FFFFFF',
    },
    filterTextInactive: {
        color: '#4B5563',
    },
    listContent: {
        padding: 16,
        paddingBottom: 24,
    },
    bottomBar: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        paddingBottom: Platform.OS === 'ios' ? 24 : 8,
        paddingTop: 8,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    },
    tabIcon: {
        fontSize: 20,
    },
    tabText: {
        fontSize: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        marginTop: 4,
    },
});
