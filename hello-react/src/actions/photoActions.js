const API_URL = "https://api.unsplash.com";
const API_ACCESS_KEY = "CANBMBIbyBVnshMQgSqXDUbngq8t4Dh63JRmpr5lzJA";

export async function getPhotos() {
    const response = await fetch(`${API_URL}/photos?client_id=${API_ACCESS_KEY}&per_page=30`);
    const data = await response.json();
    return data;
}

export async function getCollections() {
    const response = await fetch(`${API_URL}/collections?client_id=${API_ACCESS_KEY}&per_page=30`);
    const data = await response.json();
    return data;
}

export async function getCollectionPhotos(collectionId) {
    const response = await fetch(`${API_URL}/collections/${collectionId}/photos?client_id=${API_ACCESS_KEY}&per_page=30`);
    const data = await response.json();
    return data;
}