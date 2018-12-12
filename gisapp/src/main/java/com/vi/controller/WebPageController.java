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
    public ModelAndView bankInfo() {
        return  new ModelAndView("GraphicIndex");
    }
}
