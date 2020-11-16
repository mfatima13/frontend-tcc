
export default function ReduceLines(text: string ): string {
    const tam = text.length;
    if(text.length > 128){
        const reduct = tam - 128;
        const sliceText = text.slice(0, -reduct);
        
        const pont = "...";
        const nova = sliceText + pont;

        return nova;
    }

    return text;
}