import {Button} from "react-bootstrap";

const AccountItem = (props) => {
    const { account } = props;
    function deleteAccount() {
        props.selectedAccountDelete(account.id);
    }

    return (
        <tr>
            <td>
                {account.id}
            </td>
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