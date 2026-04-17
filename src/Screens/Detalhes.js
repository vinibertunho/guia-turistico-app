import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Detalhes() {
    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params?.itemData;

    if (!item) {
        return (
            <View style={styles.emptyState}>
                <Text style={styles.emptyTitle}>Nenhum item encontrado</Text>
                <Text style={styles.emptyText}>
                    Volte e selecione um ponto turístico ou restaurante.
                </Text>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        );
    }
    const abrirMapa = (url) => {
        if (!url) {
            Alert.alert('Erro', 'Localização não disponível.');
            return;
        }

        Linking.canOpenURL(url).then((supported) => {
            if (supported) {
                Linking.openURL(url);
            } else {
                Alert.alert('Erro', 'Não foi possível abrir o link do mapa.');
            }
        });
    };

    return (
        <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
            <View style={styles.hero}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
                    <Text style={styles.backIconText}>‹</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <View style={styles.rowBetween}>
                    <Text style={styles.title}>{item.nome}</Text>
                    <View style={styles.ratingBadge}>
                        <Text style={styles.ratingText}>⭐ {item.rating}</Text>
                    </View>
                </View>

                <Text style={styles.location}>📍 {item.bairro}</Text>
                <Text style={styles.description}>{item.descricao}</Text>

                <View style={styles.infoBox}>
                    <Text style={styles.infoLabel}>Categoria</Text>
                    <Text style={styles.infoValue}>{item.categoria || 'Ponto turístico'}</Text>
                </View>

                <TouchableOpacity style={styles.actionButton} onPress={() => abrirMapa(item.loc)}>
                    <Text style={styles.actionButtonText}>Explorar agora</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F4F7FB',
    },
    content: {
        paddingBottom: 28,
    },
    hero: {
        height: 340,
        backgroundColor: '#0F172A',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    backIcon: {
        position: 'absolute',
        top: 54,
        left: 20,
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(15, 23, 42, 0.72)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backIconText: {
        color: '#FFFFFF',
        fontSize: 28,
        lineHeight: 32,
        marginTop: -2,
    },
    card: {
        marginTop: -28,
        marginHorizontal: 16,
        borderRadius: 24,
        backgroundColor: '#FFFFFF',
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.12,
        shadowRadius: 18,
        shadowOffset: { width: 0, height: 8 },
        elevation: 6,
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 12,
    },
    title: {
        flex: 1,
        fontSize: 28,
        lineHeight: 34,
        fontWeight: '800',
        color: '#0F172A',
    },
    ratingBadge: {
        backgroundColor: '#ECFDF5',
        borderRadius: 999,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    ratingText: {
        color: '#047857',
        fontWeight: '700',
    },
    location: {
        marginTop: 12,
        color: '#005580',
        fontSize: 14,
        fontWeight: '600',
    },
    description: {
        marginTop: 14,
        color: '#475569',
        fontSize: 15,
        lineHeight: 22,
    },
    infoBox: {
        marginTop: 18,
        padding: 16,
        borderRadius: 18,
        backgroundColor: '#F8FAFC',
    },
    infoLabel: {
        color: '#64748B',
        fontSize: 12,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 4,
    },
    infoValue: {
        color: '#0F172A',
        fontSize: 16,
        fontWeight: '700',
    },
    actionButton: {
        marginTop: 18,
        backgroundColor: '#005580',
        borderRadius: 16,
        paddingVertical: 14,
        alignItems: 'center',
    },
    actionButtonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
    },
    emptyState: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F7FB',
    },
    emptyTitle: {
        fontSize: 24,
        fontWeight: '800',
        color: '#0F172A',
        textAlign: 'center',
    },
    emptyText: {
        marginTop: 8,
        fontSize: 15,
        color: '#64748B',
        textAlign: 'center',
        lineHeight: 22,
    },
    backButton: {
        marginTop: 18,
        backgroundColor: '#005580',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 14,
    },
    backButtonText: {
        color: '#FFFFFF',
        fontWeight: '700',
    },
});
