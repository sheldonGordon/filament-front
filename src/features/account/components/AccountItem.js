const AccountItem = (props) => {
    const { account } = props;

    return (
        <div>
            <label>
                {account.firstName}
            </label>
            <label>
                {account.lastName}
            </label>
        </div>
    );
};

export default AccountItem;