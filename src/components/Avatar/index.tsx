/**
 * @description 
 * @since Friday, 3 5th 2021, 15:03:19 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';
import IMG_NO_AVATAR from 'components/Avatar/image/noavatar.png';
import 'components/Avatar/Avatar.css';

export interface PropsAvatar {
	src?: string,
	size: number,
	[propsName: string]: any
}

class Avatar extends Component<PropsAvatar> {
	render(){
		const {src, size} = this.props;
		return(
			<img src={src ? src : IMG_NO_AVATAR} alt="Avatar" width={size} height={size} className="avatar" />
		);
	}
}

export default Avatar;
