import { Component } from "react";
import Navigation from "./navigation";
import Header from "./header";
import Content from "./content"
import Footer from "./footer";
export default class HomeLayout extends Component {
    render() {
        return (
            <>
                <Navigation />
                <Header />
                <Content />
                <Footer />
            </>
        );
    }
}
