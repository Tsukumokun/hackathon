#pragma once

/*
 * author: Tsukumo, 2014
 */

#define browser_specific(tag,properties) \
    -webkit-tag:properties;              \
       -moz-tag:properties;              \
        -ms-tag:properties;              \
         -o-tag:properties;              \
            tag:properties

#define animation(properties) \
    browser_specific(animation,properties)

#define animation_delay(properties) \
    browser_specific(animation-delay,properties)

#define animation_direction(properties) \
    browser_specific(animation-direction,properties)

#define animation_duration(properties) \
    browser_specific(animation-duration,properties)

#define animation_fill_mode(properties) \
    browser_specific(animation-fill-mode,properties)

#define animation_iteration_count(properties) \
    browser_specific(animation-iteration-count,properties)

#define animation_name(properties) \
    browser_specific(animation-name,properties)

#define animation_play_state(properties) \
    browser_specific(animation-play-state,properties)

#define animation_timing_function(properties) \
    browser_specific(animation-timing-function,properties)

#define appearance(properties) \
    browser_spceific(appearance,properties)

#define backface_visibility(properties) \
    browser_specific(backface-visibility,properties)

#define background_clip(properties) \
    browser_specific(background-clip,properties)

#define background_composite(properties) \
    browser_specific(background-composite,properties)

#define background_origin(properties) \
    browser_specific(background-origin,properties)

#define background_size(properties) \
    browser_specific(background-size,properties)

#define border_bottom_left_radius(properties) \
    browser_specific(border-bottom-left-radius,properties)

#define border_bottom_right_radius(properties) \
    browser_specific(border-bottom-right-radius,properties)

#define border_horizontal_spacing(properties) \
    browser_specific(border-horizontal-spacing,properties)

#define border_image(properties) \
    browser_specific(border-image,properties)

#define border_radius(properties) \
    browser_specific(border-radius,properties)

#define border_top_left_radius(properties) \
    browser_specific(border-top-left-radius,properties)

#define border_top_right_radius(properties) \
    browser_specific(border-top-right-radius,properties)

#define border_vertical_spacing(properties) \
    browser_specific(border-vertical-spacing,properties)

#define box_align(properties) \
    browser_specific(box-align,properties)

#define box_direction(properties) \
    browser_specific(box-direction,properties)

#define box_flex(properties) \
    browser_specific(box-flex,properties)

#define box_flex_group(properties) \
    browser_specific(box-flex-group,properties)

#define box_lines(properties) \
    browser_specific(box-lines,properties)

#define box_ordinal_group(properties) \
    browser_specific(box-ordinal-group,properties)

#define box_orient(properties) \
    browser_specific(box-orient,properties)

#define box_pack(properties) \
    browser_specific(box-pack,properties)

#define box_reflect(properties) \
    browser_specific(box-reflect,properties)

#define box_shadow(properties) \
    browser_specific(box-shadow,properties)

#define box_sizing(properties) \
    browser_specific(box-sizing,properties)

#define column_break_after(properties) \
    browser_specific(column-break-after,properties)

#define column_break_before(properties) \
    browser_specific(column-break-before,properties)

#define column_break_inside(properties) \
    browser_specific(column-break-inside,properties)

#define column_count(properties) \
    browser_specific(column-count,properties)

#define column_gap(properties) \
    browser_specific(column-gap,properties)

#define column_rule(properties) \
    browser_specific(column-rule,properties)

#define column_rule_color(properties) \
    browser_specific(column-rule-color,properties)

#define column_rule_style(properties) \
    browser_specific(column-rule-style,properties)

#define column_rule_width(properties) \
    browser_specific(column-rule-width,properties)

#define column_width(properties) \
    browser_specific(column-width,properties)

#define columns(properties) \
    browser_specific(columns,properties)

#define dashboard_region(properties) \
    browser_specific(dashboard-region,properties)

#define line_break(properties) \
    browser_specific(line-break,properties)

#define margin_bottom_collapse(properties) \
    browser_specific(margin-bottom-collapse,properties)

#define margin_collapse(properties) \
    browser_specific(margin-collapse,properties)

#define margin_start(properties) \
    browser_specific(margin-start,properties)

#define margin_top_collapse(properties) \
    browser_specific(margin-top-collapse,properties)

#define marquee(properties) \
    browser_specific(marquee,properties)

#define marquee_direction(properties) \
    browser_specific(marquee-direction,properties)

#define marquee_increment(properties) \
    browser_specific(marquee-increment,properties)

#define marquee_repetition(properties) \
    browser_specific(marquee-repetition,properties)

#define marquee_speed(properties) \
    browser_specific(marquee-speed,properties)

#define marquee_style(properties) \
    browser_specific(marquee_style,properties)

#define mask(properties) \
    browser_specific(mask,properties)

#define mask_attachment(properties) \
    browser_specific(mask-attachment,properties)

#define mask_box_image(properties) \
    browser_specific(mask-box-image,properties)

#define mask_clip(properties) \
    browser_specific(mask-clip,properties)

#define mask_composite(properties) \
    browser_specific(mask-composite,properties)

#define mask_image(properties) \
    browser_specific(mask-image,properties)

#define mask_origin(properties) \
    browser_specific(mask-origin,properties)

#define mask_position(properties) \
    browser_specific(mask-position,properties)

#define mask_position_x(properties) \
    browser_specific(mask-position-x,properties)

#define mask_position_y(properties) \
    browser_specific(mask-position-y,properties)

#define mask_size(properties) \
    browser_specific(mask-size,properties)

#define nbsp_mode(properties) \
    browser_specific(nbsp-mode,properties)

#define padding_start(properties) \
    browser_specific(padding-start,properties)

#define perspective(properties) \
    browser_specific(perspective,properties)

#define perspective_origin(properties) \
    browser_specific(perspective-origin,properties)

#define rtl_ordering(properties) \
    browser_specific(rtl-ordering,properties)

#define tap_highlight_color(properties) \
    browser_specific(tap-highlight-color,properties)

#define test_fill_color(properties) \
    browser_specific(test-fill-color,properties)

#define text_security(properties) \
    browser_specific(text-security,properties)

#define text_size_adjust(properties) \
    browser_specific(text-size-adjust,properties)

#define text_stroke(properties) \
    browser_specific(text-stroke,properties)

#define text_stroke_color(properties) \
    browser_specific(text-stroke-color,properties)

#define text_stroke_width(properties) \
    browser_specific(text-stroke-width,properties)

#define touch_callout(properties) \
    browser_specific(touch-callout,properties)

#define transform(properties) \
    browser_specific(transform,properties)

#define transform_origin(properties) \
    browser_specific(transform-origin,properties)

#define transform_origin_x(properties) \
    browser_specific(transform-origin-x,properties)

#define transform_origin_y(properties) \
    browser_specific(transform-origin-y,properties)

#define transform_origin_z(properties) \
    browser_specific(transform-origin-z,properties)

#define transform_style(properties) \
    browser_specific(transform-style,properties)

#define transition(properties) \
    browser_specific(transition,properties)

#define transition_delay(properties) \
    browser_specific(transition-delay,properties)

#define transition_duration(properties) \
    browser_specific(transition-duration,properties)

#define transition_property(properties) \
    browser_specific(transition-property,properties)

#define transition_timing_function(properties) \
    browser_specific(transition-timing-function,properties)

#define user_drag(properties) \
    browser_specific(user-drag,properties)

#define user_modify(properties) \
    browser_specific(user-modify,properties)

#define user_select(properties) \
    browser_specific(user_select,properties)

