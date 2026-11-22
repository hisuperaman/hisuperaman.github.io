// Escapes "<" so the serialized JSON can't close the script tag early
export const JsonLd = ({schema}: { schema: object }) =>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(schema).replace(/</g, '\\u003c')}}
    />
