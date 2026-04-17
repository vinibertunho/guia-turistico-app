import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ItemCard({ item, onClick, variant }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onClick} activeOpacity={0.9}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.ratingBadge}>
                <Text style={styles.starText}>⭐</Text>
                <Text style={styles.ratingText}>{item.rating}</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>{item.nome}</Text>
                <Text style={styles.description} numberOfLines={2}>
                    {item.descricao}
                </Text>

                <View style={styles.footer}>
                    <View style={styles.locationRow}>
                        <Text style={styles.locationIcon}>📍</Text>
                        <Text style={styles.locationText}>{item.bairro}</Text>
                    </View>

                    {variant === 'restaurant' && (
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Reservar</Text>
                        </View>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        marginBottom: 20,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    image: {
        width: '100%',
        height: 200,
    },
    ratingBadge: {
        position: 'absolute',
        top: 15,
        right: 15,
        backgroundColor: 'rgba(255,255,255,0.9)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    starText: {
        fontSize: 10,
    },
    ratingText: {
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 4,
    },
    content: {
        padding: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1A1A1A',
    },
    description: {
        fontSize: 13,
        color: '#666',
        marginVertical: 8,
        lineHeight: 18,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    locationIcon: {
        fontSize: 12,
    },
    locationText: {
        fontSize: 11,
        color: '#007AFF',
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    button: {
        backgroundColor: '#005580',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 8,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: '600',
    },
});
