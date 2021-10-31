import Navbar from "./navbar";

export default function Layout(props: any) {
    return (
        <>
            <Navbar />
            <main>{props.children}</main>
        </>
    )
}
