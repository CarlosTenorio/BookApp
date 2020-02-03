export interface Book {
    id?: string;
    volumeInfo?: VolumeInfo;
}

export interface VolumeInfo {
    title?: string;
    subtitle?: string;
    authors?: string[];
    publisher?: string;
    publishDate?: string;
    description?: string;
    averageRating?: number;
    ratingsCount?: number;
    imageLinks?: {
        thumbnail?: string;
        smallThumbnail?: string;
    };
}
