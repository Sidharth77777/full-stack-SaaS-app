import Header from "./components/Header";

export default function LayOutProvider({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}