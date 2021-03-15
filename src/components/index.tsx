/**
 * @description 
 * @since Thursday, 3 4th 2021, 15:57:19 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import Alert, { PropsAlert } from 'components/Alert';
import Avatar, { PropsAvatar } from 'components/Avatar';
import Badge, { PropsBadge } from 'components/Badge';
import Breadcrumb, { PropsBreadcrumb } from 'components/Breadcrumb';
import Button, { PropsButton } from 'components/Button';
import ButtonGroup, { PropsButtonGroup } from 'components/ButtonGroup';
import Checkbox, { PropsCheckbox } from 'components/Checkbox';
import { ColorCode, PropsColorCode } from 'components/Color';
import { ColorClass, PropsColorClass } from 'components/Color';
import Dropdown, { PropsDropdown } from 'components/Dropdown';
import EmptyState, { PropsEmptyState } from 'components/EmptyState';
import Error, { PropsError } from 'components/Error';
import Container, { PropsContainer } from 'components/Layout/Container';
import Row, { PropsRow } from 'components/Layout/Row';
import Col, { PropsCol } from 'components/Layout/Column';
import Loading, { PropsLoading } from 'components/Loading';
import Nav, { PropsNav, TabContent, TabPane } from 'components/Nav';
import Pagination, { PropsPagination } from 'components/Pagination';
import Radio, { PropsRadio } from 'components/Radio';
import Switch, { PropsSwitch } from 'components/Switch';
import Typography, { PropsTypography } from 'components/Typography';
import Shadow, { PropsShadow } from 'components/Shadow';
import Input, { PropsInput } from 'components/Input';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'public/css/style.css';
import 'public/css/color.css';

export {
	Alert, Avatar, Badge, Breadcrumb, Button, ButtonGroup, Checkbox, ColorCode, EmptyState, Error, Container,
	Row, Col, Loading, Nav, TabContent, TabPane, Pagination, Radio, Switch, Dropdown, ColorClass, Typography, Shadow,
	Input
};

export type {
	PropsAlert, PropsAvatar, PropsBadge, PropsBreadcrumb, PropsButton, PropsButtonGroup, PropsCheckbox, PropsColorCode,
	PropsEmptyState, PropsError, PropsContainer, PropsRow, PropsCol, PropsLoading, PropsNav, PropsPagination,
	PropsRadio, PropsSwitch, PropsDropdown, PropsColorClass, PropsTypography, PropsShadow, PropsInput
};
