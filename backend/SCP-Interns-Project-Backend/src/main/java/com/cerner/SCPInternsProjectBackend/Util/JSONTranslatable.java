package com.cerner.SCPInternsProjectBackend.Util;

import com.fasterxml.jackson.databind.ObjectMapper;

public interface JSONTranslatable {
	final ObjectMapper mapper = new ObjectMapper();
	default String toJSON() {
		try {
			return mapper.writeValueAsString(this);
		} catch (Exception e) {
			return e.getMessage();
		}
	}
}
