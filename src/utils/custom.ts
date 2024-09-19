import { toast, TypeOptions } from "react-toastify"

export const toastCustom = (message: string, type: TypeOptions) => {
    toast(message, { type })
}
export function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export const calculateTimeAgo = (createdAt: string | Date): string => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const diffTime = now.getTime() - createdDate.getTime(); // Difference in milliseconds

    const diffMinutes = Math.floor(diffTime / (1000 * 60)); // Convert to minutes
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60)); // Convert to hours
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Convert to days

    if (diffDays > 0) {
        return diffDays === 1 ? `${diffDays} day ago` : `${diffDays} days ago`;
    }
    else if (diffHours > 0) {
        return diffHours === 1 ? `${diffHours} h ago` : `${diffHours} h ago`;
    }
    else if (diffMinutes > 0) {
        return diffMinutes === 1 ? `${diffMinutes} min ago` : `${diffMinutes} min ago`;
    }
    else {
        return 'Just now';
    }
};