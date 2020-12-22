import React from 'react';
import {copyButtonText, redirectButtonText} from '../config/appConfig';

function ResultItem({img, title, url}) {
    function copyToClickBoard() {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(url);
        }
    }

    function redirectToGiphy() {
        if (window.location) {
            window.location.href = url;
        }
    }

    function getImage() {
        return (<img src={img} className='result-image' alt='Gifs by Giphy'></img>);
    }
    
    function getTitle() {
        return (
            <div className="result-item-title">
                <span className="title">{title}</span>
            </div>
        );
    }

    function getCopyButton() {
        return (
            <div className="result-item-copy column">
                <button className="button" onClick={copyToClickBoard}>{copyButtonText}</button>
            </div>
        );
    }

    function getRedirectButton() {
        return (
            <div className="result-item-redirect column">
                <button className="button" onClick={redirectToGiphy}>{redirectButtonText}</button>
            </div>
        );
    }

    return (
        <div className="result-item-container">
            <div className="result-item-image">
                {getImage()}
            </div>
            <div className="result-item-details">
                {getTitle()}
                <div className="result-item-buttons">
                    {getCopyButton()}
                    {getRedirectButton()}
                </div>
            </div>
        </div>
    );
}

export default ResultItem;