import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Image,
    Platform,
} from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export default function SobreScreen() {
    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

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
                <View style={styles.headerContainer}>
                    <TopBarHeader />
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.categoryBadge}>História e Cultura</Text>
                        <Text style={styles.title}>Sobre o Rio</Text>
                        <Text style={styles.subtitle}>A Cidade Maravilhosa</Text>
                    </View>

                    <View style={styles.imageContainer}>
                        <Image
                            source={{
                                uri: 'https://www.quintoandar.com.br/guias/wp-content/uploads/2025/05/Centro-Historico-do-Rio-de-Janeiro-Paco-Imperial.webp',
                            }}
                            style={styles.historyImage}
                            resizeMode="cover"
                        />
                        <View style={styles.captionBox}>
                            <Text style={styles.captionText}>
                                📷 Centro Histórico do Rio de Janeiro.
                            </Text>
                        </View>
                    </View>

                    {/* Conteúdo Histórico */}
                    <View style={styles.textContainer}>
                        <Text style={styles.paragraph}>
                            O Rio de Janeiro, frequentemente chamado de "Cidade Maravilhosa", possui
                            uma história rica e fascinante que moldou a identidade cultural do
                            Brasil.
                        </Text>

                        <Text style={styles.sectionTitle}>A Descoberta</Text>
                        <Text style={styles.paragraph}>
                            A Baía de Guanabara foi descoberta em 1º de janeiro de 1502 por
                            exploradores portugueses. Ao avistarem a grandiosa baía, acreditaram
                            tratar-se da foz de um grande rio, o que deu origem ao nome "Rio de
                            Janeiro".
                        </Text>

                        <Text style={styles.sectionTitle}>A Fundação</Text>
                        <Text style={styles.paragraph}>
                            A cidade foi oficialmente fundada em 1º de março de 1565 pelo militar
                            português Estácio de Sá, inicialmente com o nome de São Sebastião do Rio
                            de Janeiro. O objetivo principal da fundação era estabelecer uma base
                            militar para expulsar os franceses que haviam se fixado na região.
                        </Text>

                        <Text style={styles.sectionTitle}>A Capital do Império</Text>
                        <Text style={styles.paragraph}>
                            Durante séculos, o Rio cresceu e se tornou o centro político e econômico
                            do país. Em 1763, tornou-se a capital do Estado do Brasil. Mais tarde,
                            em 1808, abrigou a corte portuguesa, tornando-se a única cidade fora da
                            Europa a sediar a capital de um império europeu. O Rio permaneceu como
                            capital do Brasil até a inauguração de Brasília, em 1960.
                        </Text>
                    </View>
                </ScrollView>
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
        marginBottom: 8,
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
    scrollContent: {
        paddingBottom: 40,
    },
    titleContainer: {
        padding: 20,
        backgroundColor: '#FFFFFF',
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
    imageContainer: {
        marginHorizontal: 20,
        marginTop: 16,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#E5E7EB',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
    },
    historyImage: {
        width: '100%',
        height: 220,
    },
    captionBox: {
        backgroundColor: '#FFFFFF',
        padding: 12,
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
    },
    captionText: {
        fontSize: 12,
        color: '#6B7280',
        fontStyle: 'italic',
        textAlign: 'center',
    },
    textContainer: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#005580',
        marginTop: 24,
        marginBottom: 8,
    },
    paragraph: {
        fontSize: 15,
        lineHeight: 24,
        color: '#4B5563',
        marginBottom: 12,
        textAlign: 'justify',
    },
});
