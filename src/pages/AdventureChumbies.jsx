import { NavLink, Outlet } from "react-router-dom";

function AdventureChumbies() {
    const profiles = [1, 2, 3, 4, 5];
    return (
        <div className="flex">
            <h1>This is where the list of Adventure Chumbies will be rendered!</h1>
            <div className="flex flex-col gap-2">
                {profiles.map((profile) => (
                    <NavLink key={profile} to={`/adventureChumbies/${profile}`}>
                        Profile {profile}
                    </NavLink>           
                ))}
            </div>
            <Outlet/>
        </div>
    );
}

export default AdventureChumbies;
