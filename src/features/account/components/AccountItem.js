import {Button} from "react-bootstrap";

const AccountItem = (props) => {
    const { account } = props;
    function deleteAccount() {
        props.selectedAccountDelete(account);
    }

    return (
        <tr>
            <td>
                {account.firstName}
            </td>
            <td>
                {account.lastName}
            </td>
            <td>
                <Button variant="primary">Edit</Button>
                <Button variant="danger" onClick={deleteAccount}>Delete</Button>
            </td>
        </tr>
    );
};

export default AccountItem;