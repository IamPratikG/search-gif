import React from 'react';
import {copyButtonText, redirectButtonText} from '../config/appConfig';

function ResultItem({img, title, url}) {
    function getImage() {
        return (
            <div className="result-item-image"></div>
        );
    }
    
    function getTitle() {
        return (
            <div className="result-item-title"></div>
        );
    }

    function getCopyButton() {
        return (
            <div className="result-item-copy"></div>
        );
    }

    function getRedirectButton() {
        return (
            <div className="result-item-redirect"></div>
        );
    }

    return (
        <div className="result-item-container">
            {getImage()}
            {getTitle()}
            {getCopyButton()}
            {getRedirectButton()}
        </div>
    );
}

export default ResultItem;