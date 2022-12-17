import { VueReactiveAdapterResult, useReactive } from "@cfcs/vue2";
import { SCENE_ITEM_REACTIVE, SceneItemOptions, SceneItemReactiveProps } from "scenejs";

/**
 * To access the state in Vue you need to add $ prefix.
 * @typedef
 * @memberof Vue2Scene
 * @extends Reactive.AnimatorReactiveState
 */
export interface VueSceneItemResult extends VueReactiveAdapterResult<typeof SCENE_ITEM_REACTIVE> { }

/**
 * @memberof Vue2Scene
 * @param {Reactive.SceneItemReactiveProps} - Items and properties that make up the scene item
 * @param - SceneItem and Animator options
 * @return - You can use SceneItem methods and Animator State.
 * @example
 * import { useSceneItem, useNowFrame } from "vue2-scenejs";
 *
 * const item = useSceneItem({ ... });
 * const { cssText } = useNowFrame(item);
 *
 * console.log(cssText.value);
 */
export function useSceneItem(props?: SceneItemReactiveProps, options?: Partial<SceneItemOptions>) {
    return useReactive({
        ...SCENE_ITEM_REACTIVE,
        data: () => ({
            props,
            options,
        }),
    });
}
