import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './widget.scss';

type Props = {
  type: string;
};

const Widget = ({ type }: Props) => {
  let data;

  const amount = 100;
  const diff = 20;

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        link: 'See all users',
        isMoney: false,
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{ color: 'crimson', backgroundColor: 'rgba(255,0,0,0.2)' }}
          />
        )
      };
      break;
    case 'order':
      data = {
        title: 'ORDERS',
        link: 'See all orders',
        isMoney: false,
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{ color: 'goldenrod', backgroundColor: 'rgba(218,165,32,0.2)' }}
          />
        )
      };
      break;
    case 'earning':
      data = {
        title: 'EARNINGS',
        link: 'View net earnings',
        isMoney: true,
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ color: 'green', backgroundColor: 'rgba(0,128,32,0.2)' }}
          />
        )
      };
      break;
    case 'balance':
      data = {
        title: 'BALANCE',
        link: 'See all balance',
        isMoney: false,
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{ color: 'purple', backgroundColor: 'rgba(128,0,128,0.2)' }}
          />
        )
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data?.title}</div>
        <div className="counter">
          {data?.isMoney && '$'} {amount}
        </div>
        <div className="link">{data?.link}</div>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data?.icon}
      </div>
    </div>
  );
};

export default Widget;
