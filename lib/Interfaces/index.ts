export interface ArtworkType {
    artistId: string,
    artistShort: {
        country: string,
        countryCode: string,
        fullname: string
    },
    name: string,
    category: string,
    creationYear: number,
    description: string,
    dimensions: {
        depth: number,
        height: number,
        width: number
    },
    fullname: string,
    imageUrl: string,
    materials: [string],
    mediums: [string],
    otherArtworkImages: [string],
    price: number,
    status: string,
    styles: [string],
    subjects: [string],
    title: string,
    _id: string
}