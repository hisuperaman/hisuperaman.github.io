interface PageHeaderProps {
    title: string;
    desc: string;
}

export const PageHeader = ({
                               title,
                               desc
                           }: PageHeaderProps) =>
    <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">{title}</h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
            {desc}
        </p>
    </div>