import actuator from "express-actuator";

const actuator_ = actuator({
    basePath: "/management",
    infoBuildOptions: {},
    infoGitMode: "full"
})


export { actuator_ };