export default function Profile({profile, size = 50}) {
    return (
        <img src={profile.url} width={size} height={size} alt={profile.name} />
    );
}