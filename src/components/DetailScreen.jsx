import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/DetailScreen.css";

function DetailScreen() {
  const [suggestedAccounts, setSuggestedAccounts] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loadingAccounts, setLoadingAccounts] = useState(true);
  const [loadingVideos, setLoadingVideos] = useState(true);

  // Câu 2b: Gọi API cho Suggested Accounts
  useEffect(() => {
    axios
      .get("https://680897b9942707d722dec9f5.mockapi.io/SuggestAccount") // Thay bằng URL MockAPI thực tế
      .then((response) => {
        setSuggestedAccounts(response.data);
        setLoadingAccounts(false);
      })
      .catch((error) => {
        console.error("Error fetching suggested accounts:", error);
        setLoadingAccounts(false);
      });
  }, []);

  // Câu 2c: Gọi API cho Video-Like
  useEffect(() => {
    axios
      .get("https://680897b9942707d722dec9f5.mockapi.io/Video-Likes") // Thay bằng URL MockAPI thực tế
      .then((response) => {
        setVideos(response.data);
        setLoadingVideos(false);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
        setLoadingVideos(false);
      });
  }, []);
  const kiranAccount = suggestedAccounts.find((account) => account.id === "1");
  return (
    <div className="detail-screen">
      {/* Câu 2a: Vùng 1 - Kiran Glaucus */}
      <div className="kiran-glaucus">
        {kiranAccount ? (
          <>
            <img
              src={kiranAccount.avatar}
              alt={kiranAccount.username}
              className="kiran-avatar"
            />
            <h2>{kiranAccount.username}</h2>
            <p>{kiranAccount.bio || "I love a colorful life ❤️💛💙"}</p>
            <div className="stats">
              <span>{kiranAccount.following} Following</span>
              <span>{kiranAccount.followers} Followers</span>
              <span>{kiranAccount.like} Likes</span>
            </div>
            <div className="actions">
              <button className="follow-btn">Follow</button>
              <button className="message-btn">Message</button>
            </div>
          </>
        ) : (
          <p>Loading avatar...</p>
        )}
      </div>

      {/* Câu 2a & 2b: Vùng 2 - Suggested Accounts */}
      <div className="suggested-accounts">
        <div className="section-header">
          <h3>Suggested accounts</h3>
          <button className="view-more">View more</button>
        </div>
        {loadingAccounts ? (
          <p>Loading accounts...</p>
        ) : (
          <div className="accounts-list">
            {suggestedAccounts.map((account) => (
              <div key={account.id} className="account">
                <img src={account.avatar} alt={account.username} />
                <span>{account.username}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Câu 2a & 2c: Vùng 3 - Video-Like */}
      <div className="video-like">
        <h3>Videos</h3>
        {loadingVideos ? (
          <p>Loading videos...</p>
        ) : (
          <div className="videos-list">
            {videos.map((video) => (
              <div key={video.id} className="video">
                <video
                  src={video.videoUrl}
                  controls
                  className="video-player"
                  title={`Video ${video.id}`}
                />

                <p>{video.likes} Likes</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailScreen;
