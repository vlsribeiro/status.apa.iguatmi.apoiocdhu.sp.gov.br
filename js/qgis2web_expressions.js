// Aggregates

// Color

// Conditionals
function fnc_coalesce(values, context) {
    for (i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            return values[i];
        }
        
    }
    return 'ERROR';
};

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.log10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_S042_SSARUDAH_P_APA_Iguatemi_Edificacoes_01_Acompanhamento_de_habilitacao_Primeira_Fase_Classes_Detalhadascopiar_3rule1_eval_expression(context) {
    // setor  IN ('05', '06') AND geocodigo IS NOT NULL AND tip_nume IS NULL OR setor = '03' AND geocodigo IS NOT NULL AND tip_nume IS NULL AND quadra = 'A' AND (domicilio NOT IN ('0077', '0080', '0081', '0084', '0085', '0089', '0106', '0107', '0108') OR domicilio = '0085' AND digito = 'A')

    var feature = context.feature;
    
    if (feature.properties) {
        return ((("'05', '06'".indexOf(feature.properties['setor'] ) > -1  && (feature.properties['geocodigo']  !== null)) && (feature.properties['tip_nume']  === null)) || (((((feature.properties['setor']  == '03') && (feature.properties['geocodigo']  !== null)) && (feature.properties['tip_nume']  === null)) && (feature.properties['quadra']  == 'A')) && (!"'0077', '0080', '0081', '0084', '0085', '0089', '0106', '0107', '0108'".indexOf(feature.properties['domicilio'] ) > -1  || ((feature.properties['domicilio']  == '0085') && (feature.properties['digito']  == 'A')))));
    } else {
        return ((("'05', '06'".indexOf(feature['setor'] ) > -1  && (feature['geocodigo']  !== null)) && (feature['tip_nume']  === null)) || (((((feature['setor']  == '03') && (feature['geocodigo']  !== null)) && (feature['tip_nume']  === null)) && (feature['quadra']  == 'A')) && (!"'0077', '0080', '0081', '0084', '0085', '0089', '0106', '0107', '0108'".indexOf(feature['domicilio'] ) > -1  || ((feature['domicilio']  == '0085') && (feature['digito']  == 'A')))));
    }
}


function exp_S042_SSARUDAH_P_APA_Iguatemi_Edificacoes_01_Acompanhamento_de_habilitacao_Primeira_Fase_Classes_Detalhadascopiar_3rule2_eval_expression(context) {
    // "Classifica��o 2" = 'Aferi��o AM'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Classifica��o 2']  == 'Aferi��o AM');
    } else {
        return (feature['Classifica��o 2']  == 'Aferi��o AM');
    }
}


function exp_S042_SSARUDAH_P_APA_Iguatemi_Edificacoes_01_Acompanhamento_de_habilitacao_Primeira_Fase_Classes_Detalhadascopiar_3rule3_eval_expression(context) {
    // "Classifica��o 2" = 'Aferi��o UH' AND Especificar = 'A13'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Classifica��o 2']  == 'Aferi��o UH') && (feature.properties['Especificar']  == 'A13'));
    } else {
        return ((feature['Classifica��o 2']  == 'Aferi��o UH') && (feature['Especificar']  == 'A13'));
    }
}


function exp_S042_SSARUDAH_P_APA_Iguatemi_Edificacoes_01_Acompanhamento_de_habilitacao_Primeira_Fase_Classes_Detalhadascopiar_3rule4_eval_expression(context) {
    // "Classifica��o 2" = 'Aferi��o UH' AND Especificar = 'A32'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Classifica��o 2']  == 'Aferi��o UH') && (feature.properties['Especificar']  == 'A32'));
    } else {
        return ((feature['Classifica��o 2']  == 'Aferi��o UH') && (feature['Especificar']  == 'A32'));
    }
}


function exp_S042_SSARUDAH_P_APA_Iguatemi_Edificacoes_01_Acompanhamento_de_habilitacao_Primeira_Fase_Classes_Detalhadascopiar_3rule5_eval_expression(context) {
    // "Classifica��o 2" = 'Ausente'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Classifica��o 2']  == 'Ausente');
    } else {
        return (feature['Classifica��o 2']  == 'Ausente');
    }
}


function exp_S042_SSARUDAH_P_APA_Iguatemi_Edificacoes_01_Acompanhamento_de_habilitacao_Primeira_Fase_Classes_Detalhadascopiar_3rule6_eval_expression(context) {
    // "Classifica��o 2" = 'Estudo de caso'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Classifica��o 2']  == 'Estudo de caso');
    } else {
        return (feature['Classifica��o 2']  == 'Estudo de caso');
    }
}


function exp_S042_SSARUDAH_P_APA_Iguatemi_Edificacoes_01_Acompanhamento_de_habilitacao_Primeira_Fase_Classes_Detalhadascopiar_3rule7_eval_expression(context) {
    // "Classifica��o 2" = 'Habilitado - A13' OR "Classifica��o 2" = 'Habilitado (cadin) - A13'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Classifica��o 2']  == 'Habilitado - A13') || (feature.properties['Classifica��o 2']  == 'Habilitado (cadin) - A13'));
    } else {
        return ((feature['Classifica��o 2']  == 'Habilitado - A13') || (feature['Classifica��o 2']  == 'Habilitado (cadin) - A13'));
    }
}


function exp_S042_SSARUDAH_P_APA_Iguatemi_Edificacoes_01_Acompanhamento_de_habilitacao_Primeira_Fase_Classes_Detalhadascopiar_3rule8_eval_expression(context) {
    // "Classifica��o 2" = 'Habilitado - A32'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Classifica��o 2']  == 'Habilitado - A32');
    } else {
        return (feature['Classifica��o 2']  == 'Habilitado - A32');
    }
}


function exp_S042_SSARUDAH_P_APA_Iguatemi_Edificacoes_01_Acompanhamento_de_habilitacao_Primeira_Fase_Classes_Detalhadascopiar_3rule9_eval_expression(context) {
    // "Classifica��o 2" = 'Sorteado - A13'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Classifica��o 2']  == 'Sorteado - A13');
    } else {
        return (feature['Classifica��o 2']  == 'Sorteado - A13');
    }
}


function exp_S042_SSARUDAH_P_APA_Iguatemi_Edificacoes_01_Acompanhamento_de_habilitacao_Primeira_Fase_Classes_Detalhadascopiar_3rule10_eval_expression(context) {
    // "Classifica��o 2" = 'Indeciso'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Classifica��o 2']  == 'Indeciso');
    } else {
        return (feature['Classifica��o 2']  == 'Indeciso');
    }
}


function exp_S042_SSARUDAH_P_APA_Iguatemi_Edificacoes_01_Acompanhamento_de_habilitacao_Primeira_Fase_Classes_Detalhadascopiar_3rule11_eval_expression(context) {
    // "Classifica��o 2" = 'Indeferido+Comercio' OR "Classifica��o 2" = 'Indeferido+Com�rcio' OR "Classifica��o 2" = 'Indeferido+Constru��o' OR "Classifica��o 2" = 'Indeferido+Vaga'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((((feature.properties['Classifica��o 2']  == 'Indeferido+Comercio') || (feature.properties['Classifica��o 2']  == 'Indeferido+Com�rcio')) || (feature.properties['Classifica��o 2']  == 'Indeferido+Constru��o')) || (feature.properties['Classifica��o 2']  == 'Indeferido+Vaga'));
    } else {
        return ((((feature['Classifica��o 2']  == 'Indeferido+Comercio') || (feature['Classifica��o 2']  == 'Indeferido+Com�rcio')) || (feature['Classifica��o 2']  == 'Indeferido+Constru��o')) || (feature['Classifica��o 2']  == 'Indeferido+Vaga'));
    }
}


function exp_S042_SSARUDAH_P_APA_Iguatemi_Edificacoes_01_Acompanhamento_de_habilitacao_Primeira_Fase_Classes_Detalhadascopiar_3rule12_eval_expression(context) {
    // "Classifica��o 2" = 'Contrato assinado - A13' OR "Classifica��o 2" = 'Contrato Assinado - A13'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Classifica��o 2']  == 'Contrato assinado - A13') || (feature.properties['Classifica��o 2']  == 'Contrato Assinado - A13'));
    } else {
        return ((feature['Classifica��o 2']  == 'Contrato assinado - A13') || (feature['Classifica��o 2']  == 'Contrato Assinado - A13'));
    }
}


function exp_S042_SSARUDAH_P_APA_Iguatemi_Edificacoes_01_Acompanhamento_de_habilitacao_Primeira_Fase_Classes_Detalhadascopiar_3rule13_eval_expression(context) {
    // "Classifica��o 2" = 'Sorteado - A32'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Classifica��o 2']  == 'Sorteado - A32');
    } else {
        return (feature['Classifica��o 2']  == 'Sorteado - A32');
    }
}


function exp_S042_SSARUDAH_P_APA_Iguatemi_Edificacoes_01_Acompanhamento_de_habilitacao_Primeira_Fase_Classes_Detalhadascopiar_3rule14_eval_expression(context) {
    // "Classifica��o 2" = 'Visita Domiciliar'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Classifica��o 2']  == 'Visita Domiciliar');
    } else {
        return (feature['Classifica��o 2']  == 'Visita Domiciliar');
    }
}


function exp_S042_SSARUDAH_P_APA_Iguatemi_Edificacoes_01_Acompanhamento_de_habilitacao_Primeira_Fase_Classes_Detalhadascopiar_3rule15_eval_expression(context) {
    // "Classifica��o 2" = 'Iniciar Habilita��o'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Classifica��o 2']  == 'Iniciar Habilita��o');
    } else {
        return (feature['Classifica��o 2']  == 'Iniciar Habilita��o');
    }
}


function exp_S042_SSARUDAH_P_APA_Iguatemi_Edificacoes_01_Acompanhamento_de_habilitacao_Primeira_Fase_Classes_Detalhadascopiar_3rule16_eval_expression(context) {
    // "Classifica��o 2" = 'Pendente'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Classifica��o 2']  == 'Pendente');
    } else {
        return (feature['Classifica��o 2']  == 'Pendente');
    }
}


function exp_S042_SSARUDAH_P_APA_Iguatemi_Edificacoes_01_Acompanhamento_de_habilitacao_Primeira_Fase_Classes_Detalhadascopiar_3rule17_eval_expression(context) {
    // "Classifica��o 2" = 'Sem ades�o' OR "Classifica��o 2" = 'Sem Ades�o'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Classifica��o 2']  == 'Sem ades�o') || (feature.properties['Classifica��o 2']  == 'Sem Ades�o'));
    } else {
        return ((feature['Classifica��o 2']  == 'Sem ades�o') || (feature['Classifica��o 2']  == 'Sem Ades�o'));
    }
}


function exp_S042_SSARUDAH_P_APA_Iguatemi_Edificacoes_01_Acompanhamento_de_habilitacao_Primeira_Fase_Classes_Detalhadascopiar_3rule18_eval_expression(context) {
    // "Classifica��o 2" = 'Troca Autorizada'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Classifica��o 2']  == 'Troca Autorizada');
    } else {
        return (feature['Classifica��o 2']  == 'Troca Autorizada');
    }
}


function exp_S042_SSARUDAH_P_APA_Iguatemi_Edificacoes_01_Acompanhamento_de_habilitacao_Primeira_Fase_Classes_Detalhadascopiar_3rule19_eval_expression(context) {
    // "Classifica��o 2" = 'Mobilizado'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Classifica��o 2']  == 'Mobilizado');
    } else {
        return (feature['Classifica��o 2']  == 'Mobilizado');
    }
}


function exp_S042_SSARUDAH_P_APA_Iguatemi_Edificacoes_01_Acompanhamento_de_habilitacao_Primeira_Fase_Classes_Detalhadascopiar_3rule20_eval_expression(context) {
    // "Classifica��o 2" = 'N�o mobilizado'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Classifica��o 2']  == 'N�o mobilizado');
    } else {
        return (feature['Classifica��o 2']  == 'N�o mobilizado');
    }
}


function exp_S042_SSARUDAH_P_APA_Iguatemi_Edificacoes_01_Acompanhamento_de_habilitacao_Primeira_Fase_Classes_Detalhadascopiar_3rule21_eval_expression(context) {
    // "Mudan�a realizada?" = 'Sim'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Mudan�a realizada?']  == 'Sim');
    } else {
        return (feature['Mudan�a realizada?']  == 'Sim');
    }
}