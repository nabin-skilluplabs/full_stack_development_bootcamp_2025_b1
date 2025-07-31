import Profile from "./Profile";

export default function Gallery() {
    const a = {
        name: "Alexa",
        url: "https://i.imgur.com/MK3eW3As.jpg"
    }

    const profile2 = {
        name: "Steve",
        url: "https://i.imgur.com/QIrZWGIs.jpg"
    }

    const showTitle = true;
    const profileCount = 0;
    

    return (
        <div>
            { showTitle ? <h1>Amazing scientists</h1> : <h1>Scientists</h1>}
            {
                profileCount ? <h2>There are {profileCount} profiles to show</h2> : <h2>There are no profiles to show</h2>
            }
           
              
              <Profile size={100} profile={a} />
              <Profile profile={profile2}  />
              <Profile size={1000} profile={a}  />
            </div>
    );
}