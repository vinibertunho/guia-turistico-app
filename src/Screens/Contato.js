import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    ScrollView,
    TextInput,
    Alert,
} from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export default function Contato() {
    const navigation = useNavigation();

    // Estados para o formulário
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    const handleEnviar = () => {
        if (!nome || !email || !mensagem) {
            Alert.alert('Atenção', 'Por favor, preencha todos os campos antes de enviar.');
            return;
        }


        Alert.alert('Mensagem Enviada!', 'Obrigado por entrar em contato. Retornaremos em breve.');
        setNome('');
        setEmail('');
        setMensagem('');
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
                    {/* Cabeçalho da Página */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.categoryBadge}>Atendimento</Text>
                        <Text style={styles.title}>Fale Conosco</Text>
                        <Text style={styles.subtitle}>Dúvidas, sugestões ou parcerias?</Text>
                    </View>

                    {/* Informações de Contato Rápidas */}
                    <View style={styles.infoCard}>
                        <Text style={styles.infoTitle}>Nossos Canais</Text>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoIcon}>📧</Text>
                            <Text style={styles.infoText}>gustavo.a.lima21@aluno.senai.br</Text>

                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoIcon}>📞</Text>
                            <Text style={styles.infoText}>(19) 993220321</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoIcon}>📍</Text>
                            <Text style={styles.infoText}>Centro, Rio de Janeiro - RJ</Text>
                        </View>
                    </View>

                    {/* Formulário de Contato */}
                    <View style={styles.formContainer}>
                        <Text style={styles.formTitle}>Envie uma mensagem</Text>

                        <Text style={styles.label}>Nome</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Seu nome completo"
                            placeholderTextColor="#9CA3AF"
                            value={nome}
                            onChangeText={setNome}
                        />

                        <Text style={styles.label}>E-mail</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="seu.email@exemplo.com"
                            placeholderTextColor="#9CA3AF"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />

                        <Text style={styles.label}>Mensagem</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Como podemos te ajudar?"
                            placeholderTextColor="#9CA3AF"
                            multiline
                            numberOfLines={5}
                            textAlignVertical="top"
                            value={mensagem}
                            onChangeText={setMensagem}
                        />

                        <TouchableOpacity style={styles.submitButton} onPress={handleEnviar}>
                            <Text style={styles.submitButtonText}>Enviar Mensagem</Text>
                        </TouchableOpacity>
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
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
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
        marginTop: 4,
    },
    categoryBadge: {
        color: '#005580',
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        marginBottom: 4,
    },
    infoCard: {
        backgroundColor: '#FFFFFF',
        margin: 20,
        padding: 20,
        borderRadius: 16,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 16,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    infoIcon: {
        fontSize: 18,
        marginRight: 12,
    },
    infoText: {
        fontSize: 15,
        color: '#4B5563',
    },
    formContainer: {
        paddingHorizontal: 20,
    },
    formTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#4B5563',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 15,
        color: '#111827',
        marginBottom: 20,
    },
    textArea: {
        height: 120,
    },
    submitButton: {
        backgroundColor: '#005580',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 8,
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
});
