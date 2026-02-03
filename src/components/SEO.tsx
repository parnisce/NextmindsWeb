import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    schema?: object;
}

const SEO = ({ title, description, schema }: SEOProps) => {
    useEffect(() => {
        // Update Document Title
        document.title = `${title} | Nextminds`;

        // Update Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description);

        // Update Schema Markup if provided
        let schemaScript = document.getElementById('page-schema');
        if (schema) {
            if (!schemaScript) {
                schemaScript = document.createElement('script');
                schemaScript.id = 'page-schema';
                schemaScript.setAttribute('type', 'application/ld+json');
                document.head.appendChild(schemaScript);
            }
            schemaScript.textContent = JSON.stringify(schema);
        } else if (schemaScript) {
            schemaScript.remove();
        }
    }, [title, description, schema]);

    return null;
};

export default SEO;
