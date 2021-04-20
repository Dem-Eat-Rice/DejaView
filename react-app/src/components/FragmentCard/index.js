import React from "react";

function FragmentCard ({ fragment }) {

    return (
        <>
            <div className="title-frag">
              <div className="title-content_fragment">
                {fragment.title}
              </div>
            </div>
            <div className="emotions-frag">
              <div className="emotions-content_fragment">
                Emotions:
              <br />
                {fragment.emotions}
              </div>
            </div>
            <div className="setting-frag">
              <div className="setting-content_fragment">
                Setting:
              <br />
                <div>
                {fragment.setting}
                </div>
              </div>
            </div>
            <div className="description-frag">
              <div className="description-content_fragment">
                Description:
                <br />
                {fragment.description}
              </div>
            </div>
        </>
    )
}

export default FragmentCard;