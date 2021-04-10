
const Error404 = () => {
    return (
        <main>
            <section className="notifications">
                <p className="notification-message">Page not found</p>
            </section>
            <img src="sadFace.png" alt="sad-face" className="sad-face" />
            <h1 className="not-found">404 - Page Not Found</h1>
        </main>
    );
};

export default Error404;