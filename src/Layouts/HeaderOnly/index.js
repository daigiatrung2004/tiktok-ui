import Header from '~/Layouts/component/Header';
function HeaderOnly({ children }) {
    return (
        <div className="HeaderOnly">
            <Header />
            <div>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
