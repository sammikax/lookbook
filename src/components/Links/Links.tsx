type LinksProps = {
    label?: string;
    className?: string;
}


export default function Links({ label, className }: LinksProps) {
    return (
        <a className={className}>{label}</a>
    );
};
