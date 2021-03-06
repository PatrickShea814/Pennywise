import React, { Component } from 'react';
import styled from 'styled-components';
import UpcomingItem from './UpcomingItem';
import MyBalance from './UserBalance';

const DashWrap = styled.div`
    display: flex;
    border-bottom: 1px solid white;
    text-align: center;
    letter-spacing: 2px;
    margin: 0 auto;
    padding: 1% 0 2% 0;
    width: 70%;
    justify-content: center;
`;

class DashInfo extends Component {
    render() {
        return (
            <DashWrap>
                <UpcomingItem />
                <MyBalance />
            </DashWrap>
        )
    }
}

export default DashInfo;