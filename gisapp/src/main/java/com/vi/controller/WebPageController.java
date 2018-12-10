package com.vi.controller;

import java.util.HashMap;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class WebPageController {
	 /**
     * @param map
     * @return
     */
    @RequestMapping("/map")
    public String mapHtml(HashMap<String, Object> map) {
        return "/GraphicIndex";
    }
    
    /**
     * @param map
     * @return
     */
    @RequestMapping("/videoTest")
    public String videoHtml(HashMap<String, Object> map,@RequestParam(name = "videoId") String videoId) {
    	map.put("videoId", videoId);
        return "/playview";
    }
}
