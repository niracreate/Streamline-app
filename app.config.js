require("dotenv").config();

const PACKAGE_NAME = "com.streamline.streamline";
const PROJECT_ID = "streamline-6ee5f";
const VERSION = "v2.0.0";
const THEME = "dark";

export default {
    name: "streamline",
    slug: "streamline",
    owner: "nirakar04",
    version: VERSION,
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: PACKAGE_NAME,
    userInterfaceStyle: "automatic",
    splash: {
        image: "./assets/images/splash.png",
        resizeMode: "contain",
        backgroundColor: THEME == "dark" ? "#413f44" : "#ffffff",
    },
    privacy: "public",
    assetBundlePatterns: ["**/*"],
    ios: {
        usesAppleSignIn: true,
        supportsTablet: true,
        bundleIdentifier: PACKAGE_NAME,
        buildNumber: VERSION,
    },
    android: {
        permissions: [],
        adaptiveIcon: {
            foregroundImage: "./assets/images/adaptive-icon.png",
            backgroundColor: "#ffffff",
        },
        package: PACKAGE_NAME,
    },
    plugins: [
        [
            "expo-barcode-scanner",
            {
                cameraPermission: "Allow $(PRODUCT_NAME) to access camera.",
            },
        ],
    ],
    extra: {
        eas: {
            projectId: "e8dc3d5b-f541-427f-9967-e1761138c044",
        },
    },

    runtimeVersion: {
        policy: "sdkVersion",
    },
};
