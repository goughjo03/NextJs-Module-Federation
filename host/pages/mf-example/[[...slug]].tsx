import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";

// @ts-ignore
const MfExample = dynamic(() => import('MfExample/MfExample'), {
    ssr: false,
    loading: () => <p>Loading...</p>
});

const ModuleFederationPage = () => {
    const { pathname, push, query: { slug } } = useRouter();

    const handleRouteChangeEvent = ({ detail: { route } }: CustomEvent<{ route: string }>) => {
        push(pathname.replace('[[...slug]]', route));
    }

    useEffect(() => {
        window.addEventListener('nova-route-change', handleRouteChangeEvent as EventListener)
        return () => {
            window.removeEventListener('nova-route-change', handleRouteChangeEvent as EventListener)
        }
    }, []);

    /**
     * reduce an array of strings to one string seperated by forward slashes
     */
    const reducePath = (path: string[]) => path?.reduce((acc, curr) => `${acc}/${curr}`);

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <h2>
                Host Element
            </h2>
            <p>Slug: {slug}</p>
            <div
                style={{
                    border: '1px solid #cc0000',
                    padding: '10px',
                }}>
                {/* @ts-ignore */}
                <MfExample route={reducePath(slug)} />
            </div>
        </div>
    )
};

export default ModuleFederationPage;

