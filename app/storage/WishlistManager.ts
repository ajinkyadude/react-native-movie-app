import AsyncStorage from '@react-native-async-storage/async-storage';

const WISHLIST_KEY = 'wishlist_data';

const addToWishlist = async(item) => {
    try {
        const jsonSTR = await getWishlist();
        let data = [];
        if (jsonSTR !== null) {
            data = JSON.parse(jsonSTR);
        }
        data = [...data, item];
        let dataStr = JSON.stringify(data);
        await AsyncStorage.setItem(`@${WISHLIST_KEY}`,dataStr);
        return true;
    } catch (error) {
        return false;
    }
};

const getWishlist = async() => {
    try {
        let data = await AsyncStorage.getItem(`@${WISHLIST_KEY}`);
        return data;
    } catch(error) {
    }
}

const clearWishlist = async() => {
    try {
        await AsyncStorage.clear();
        
    } catch(error) {

    }
}

const removeFromWishlist = async(item) => {
    try {
        const jsonSTR = await getWishlist();
        let data = JSON.parse(jsonSTR);
        let index = data.indexOf(item);
        if(index !== -1) {
            data.splice(index,1);
        }
        await clearWishlist();
        let dataStr = JSON.stringify(data);
        await AsyncStorage.setItem(`@${WISHLIST_KEY}`,dataStr);
    } catch(error) {
    }
}

export {addToWishlist, getWishlist, clearWishlist, removeFromWishlist};