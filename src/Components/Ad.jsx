import React from 'react';

function Ad({ showAd }) {
    if (!showAd){
        return null;
    }

    return (
        <div>
            <img src ="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F74f6aa34-1f5b-4208-85df-c063b5f2b0bd%2Ff0e6efc3-b621-4fde-87ab-4cd4a7af3e38%2FUntitled.svg?table=block&id=47aa3d24-9ae3-4f2c-8ae5-226000fada44&spaceId=74f6aa34-1f5b-4208-85df-c063b5f2b0bd&userId=2fe1057d-f0c2-424f-8070-d43c6974ee65&cache=v2" alt="Ad Banner"/>
        </div>

    );
    
}

export default Ad;