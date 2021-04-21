import React from "react";

function FragmentCard({ fragment }) {

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