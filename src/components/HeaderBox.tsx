export default function HeaderBox({
  type = "title",
  title,
  subtext,
  user,
}: HeaderBoxProps) {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}&nbsp;
        {type === "greeting" && (
          <span className="text-bank-gradient">{user}</span>
        )}
      </h1>

      <p className="header-box-subtext">{subtext}</p>
    </div>
  );
}
