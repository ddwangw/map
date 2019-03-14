package com.vi.controller;

import java.util.HashMap;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class WebPageController {
    @RequestMapping("/map")
    public String mapHtml(HashMap<String, Object> map) {
        return "/GraphicIndex";
    }
    @RequestMapping("/videoTest")
    public ModelAndView videoHtml(HashMap<String, Object> map,@RequestParam(name = "videoId") String videoId) {
    	map.put("videoId", videoId);
//        return "/playview";
        return  new ModelAndView("playview");
    }
    @RequestMapping("/graphicmap")
    public ModelAndView graphic() {
        return  new ModelAndView("GraphicIndex");
    }
    @RequestMapping("/pointmeasure")
    public ModelAndView pointmeasuer() {
        return  new ModelAndView("VideoGraphicOfMeasureTool");
    }
    /**
     * 共享平台用户申请矢量数据服务接口展示页面
     * 
     * @param map
     * @param userId
     * @return
     */
    @RequestMapping("/dataLayerManager")
    public ModelAndView dataLayerManager(HashMap<String, Object> map,@RequestParam(name = "userId") String userId) {
    	map.put("userId", userId);
        return  new ModelAndView("DataLayerManager");
    }
    /**
     * 多图层管理
     * @return
     */
    @RequestMapping("/layermanage")
    public ModelAndView layermanage() {
        return  new ModelAndView("MapLayerManager");
    }
}
