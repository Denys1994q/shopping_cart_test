import "./Header.sass";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const Header = () => {
    const order = useSelector((state: any) => state.ShopSlice.order)

    return (
        <header className='header'>
            <Link to='/'>
                <img className='header__logo' src={require("../../../imgs/Glovo_logo.png")} alt='glovo-logo' />
            </Link>
            <Link to='/cart'>
                <Badge
                    badgeContent={order.length}
                    color='success'
                    sx={{ "& .MuiBadge-badge": { fontSize: 14 } }}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}>
                    <ShoppingCartOutlinedIcon color='success' sx={{ fontSize: "32px", cursor: "pointer" }} />
                </Badge>
            </Link>
        </header>
    );
};

export default Header;
