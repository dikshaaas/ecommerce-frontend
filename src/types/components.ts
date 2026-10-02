export type ProductCardProps= {
    name: string;
    image: string;
    price: string;
    oldPrice?: string;
    discount: string;
    saveText: string;
};

export type CategoryCardProps= {
    name: string;
    image: string;
};

export type BrandBannerProps= {
    name: string;
    image: string;
    logo: string;
    offer: string;
    background: string;
    textColor: string;
}