import React from "react";
import { Draggable } from "react-beautiful-dnd";

function FragmentCard({ fragment, index }) {

    return (
        
        <div className="fragment-card_container">
            <div className="title-frag">
                {fragment.title}
            </div>
            <div className="emotions-frag">
                Emotions:
                    <br />
                {fragment.emotions}
            </div>
            <div className="setting-frag">
                Setting:
                    <br />
                <div>
                    {fragment.setting}
                </div>
            </div>
            <div className="description-frag">
                Description:
                        <br />
                {fragment.description}
            </div>
        </div>
    )
}
export default FragmentCard;