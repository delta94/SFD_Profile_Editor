import { Button } from "@material-ui/core";
import { useSelector } from "app/store/reduxHooks";

export function DevTool(props) {
  const devTool = useSelector((state) => state.global.devTool);
  const onReset = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div
      style={{
        position: "absolute",
        bottom: 5,
        right: 5,
        display: devTool ? "flex" : "none",
        columnGap: 5,
      }}
    >
      <Button id="render-profile-devtool-btn" size="small" variant="outlined">
        Rerender profile
      </Button>
      <Button size="small" variant="outlined" onClick={onReset}>
        Reset
      </Button>
    </div>
  );
}