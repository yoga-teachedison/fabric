import React from "react";
// import { fabric } from "fabric";
import {
  FabricJSCanvas,
  FabricJSEditorHook,
  useFabricJSEditor,
} from "fabricjs-react";

// const ComponentWithNoSSR = dynamic(() => <>No SSR</>, { ssr: false });

export default function Fabric() {
  // const { editor, onReady } = useFabricJSEditor();

  return (
    <FabricJSCanvas
      className="fabricCanvas tw-shadow tw-border tw-border-solid tw-border-slate-300"
      onReady={onReady}
    />
  );
}

Fabric.getInitialProps = () => {
  return { integrations: [] };
};
