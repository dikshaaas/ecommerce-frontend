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
    circleColor: string;
    brandLabelColor: string;
}

export type EssentialProps= {
    name: string;
    offer: string;
    image: string;
}

export type CategoryNavProps= {
    name: string;
}