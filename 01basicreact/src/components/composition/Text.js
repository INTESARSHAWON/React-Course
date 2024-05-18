function Text({addEmoji, addBracket}) {
    let text = 'I am Javascript programming Language';
    // return <div>{addEmoji ? addEmoji(text, '💜') : text}</div>
    if (addEmoji) {
        text = addEmoji (text, '💜');
    }
    if (addBracket) {
        text = addBracket(text);
    }
    return <div>{text}</div>
}

export default Text